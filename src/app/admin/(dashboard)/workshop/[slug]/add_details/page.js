'use client';

import { useState } from 'react';
import {
  useCreateCollegeMutation,
  useDeleteCollegeMutation,
  useDeleteImageMutation,
  useGetAllCollegeQuery,
  useGetWorkshopBySlugQuery,
  useUpdateCollegeMutation,
  useUploadImageBySlugMutation
} from '../../../../../../../redux/features/workshop/workshopApi';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function CollegeDashboard() {
  const { slug } = useParams();
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(null);

  // College form state
  const [formData, setFormData] = useState({
    collegename: '',
    name: '',
    heading: ''

  });
  const { data: colleges, isLoading, refetch } = useGetAllCollegeQuery();
  const [createCollege] = useCreateCollegeMutation();
  const [updateCollege] = useUpdateCollegeMutation();
  const [deleteCollege] = useDeleteCollegeMutation();

  // Image state
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { data: workshop, refetch: refetchImages } = useGetWorkshopBySlugQuery(currentSlug, {
    skip: !currentSlug,
  });
  const [uploadImage, { isLoading: uploading }] = useUploadImageBySlugMutation();
  const [deleteImage, { isLoading: deleting }] = useDeleteImageMutation();

  // 🟢 FIXED: Delete Image
  const handleDelete = async (public_id) => {
    try {
      await deleteImage({ slug: currentSlug, public_id }).unwrap();
      toast.success("Image deleted successfully");
      refetchImages(); // refresh images after delete
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete image");
    }
  };

  // College Modal Handlers
  const handleOpenCollegeModal = (college = null) => {
    if (college) {
      setFormData({ collegename: college.collegename, name: college.name, heading: college.heading });
      setCurrentSlug(college.slug);
    } else {
      setFormData({ collegename: '', name: '', heading: '' });
      setCurrentSlug(null);
    }
    setIsCollegeModalOpen(true);
  };

  const handleCollegeSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentSlug) {
        await updateCollege({ slug: currentSlug, data: formData }).unwrap();
        toast.success('College updated');
      } else {
        await createCollege(formData).unwrap();
        toast.success('College created');
      }
      setIsCollegeModalOpen(false);
      refetch();
    } catch {
      toast.error('Error saving college');
    }
  };

  const handleDeleteCollege = async (slug) => {
    if (confirm('Delete this college?')) {
      await deleteCollege(slug).unwrap();
      toast.success('College deleted');
      refetch();
    }
  };

  // Image Modal Handlers
  const handleOpenImageModal = (slug) => {
    setCurrentSlug(slug);
    setSelectedFile(null);
    setPreview(null);
    setIsImageModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      await uploadImage({ slug: currentSlug, formData }).unwrap();
      toast.success('Image uploaded');
      setSelectedFile(null);
      setPreview(null);
      refetchImages();
    } catch {
      toast.error('Error uploading image');
    }
  };

  return (
    <div className="p-6">
      {/* College Info Section */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">🎓 Workshop Management</h1>
        <button
          onClick={() => handleOpenCollegeModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add College Workshop
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">College Name</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Heading</th>
              <th className="px-4 py-2 border">Image Count</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colleges?.slice().reverse().map((c) => (
              <tr key={c._id}>
                <td className="border p-2">{c.collegename}</td>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.heading}</td>
                <td className="px-4 py-2 border">
                  {c?.image ? c.image.length : 0}
                </td>
                <td className="border p-2 flex gap-2">
                  <button onClick={() => handleOpenCollegeModal(c)} className="px-3 py-1 cursor-pointer bg-yellow-500 text-white rounded">Edit</button>
                  <button onClick={() => handleDeleteCollege(c.slug)} className="px-3 py-1 cursor-pointer bg-red-500 text-white rounded">Delete</button>
                  <button onClick={() => handleOpenImageModal(c.slug)} className="px-3 py-1 cursor-pointer bg-purple-500 text-white rounded">Manage Images</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* College Modal */}
      {isCollegeModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-96">
            <h2 className="text-lg font-bold mb-4">{currentSlug ? 'Edit College' : 'Add College'}</h2>
            <form onSubmit={handleCollegeSubmit}>
              <input
                type="text"
                placeholder="College Name"
                value={formData.collegename}
                onChange={(e) => setFormData({ ...formData, collegename: e.target.value })}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Heading"
                value={formData.heading}
                onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                className="border p-2 w-full mb-2"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setIsCollegeModalOpen(false)} className="px-4 py-2 cursor-pointer bg-gray-300 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white cursor-pointer rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-[600px] max-h-[90vh] flex flex-col">
            <h2 className="text-lg font-bold mb-4">Manage Images for {currentSlug}</h2>

            {/* Upload Form */}
            <form onSubmit={handleImageSubmit} className="mb-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {preview && (
                <img
                  src={preview}
                  className="w-32 h-32 object-cover rounded mb-2 mt-3 mx-auto"
                />
              )}

              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 cursor-pointer text-center text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center"
                disabled={uploading}
              >
                {uploading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Uploading...</span>
                  </div>
                ) : (
                  "Upload"
                )}
              </button>
            </form>

            {/* Existing Images → scrollable area */}
            <div className="grid grid-cols-3 gap-4 overflow-y-auto pr-2 flex-1">
              {workshop?.image?.map((img) => (
                <div key={img.public_id} className="relative">
                  <img src={img.url} className="w-full h-32 object-cover rounded" />
                  <button
                    onClick={() => handleDelete(img.public_id)}
                    className="mt-1 px-2 py-1 bg-red-500 text-white text-xs cursor-pointer rounded hover:bg-red-600 disabled:opacity-50 flex items-center justify-center"
                    disabled={deleting}
                  >
                    {deleting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Footer always visible */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="px-4 py-2 cursor-pointer bg-gray-300 hover:bg-red-300 duration-200 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>


      )}
    </div>
  );
}
