import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { adminAuthApi } from '../redux/features/adminAuth/adminAuthAPi';
import adminAuthReducer from '../redux/features/adminAuth/adminAuthSlice';
import { sliderApi } from '../redux/features/sliders/sliderApi';
import { TechnologyApi } from './features/technology/technologyAPI';
import { PortfolioApi } from './features/portfolio/portfolioAPI';
import { EventApi } from './features/event/eventApi';
import { TeamMembersApi } from './features/TeamMembers';
import { WorkshopApi } from './features/workshop/workshopApi';
import { PlacementApi } from './features/placement/placementAPi';
import { ContactApi } from './features/contact/contactApi';
import { CourseAPI } from './features/course/courseAPI/courseAPI';
import { CourseBookAPI } from './features/course/courseBookAPI/courseBookAPI';

// persist config for adminAuth slice only
const persistConfig = {
  key: 'adminAuth',
  storage,
  whitelist: ['admin'] // sirf admin data persist karna
};

const persistedAdminReducer = persistReducer(persistConfig, adminAuthReducer);

export const store = configureStore({
  reducer: {
    adminAuth: persistedAdminReducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [TechnologyApi.reducerPath]: TechnologyApi.reducer,
    [PortfolioApi.reducerPath]: PortfolioApi.reducer,
    [EventApi.reducerPath]: EventApi.reducer,
    [TeamMembersApi.reducerPath]: TeamMembersApi.reducer,
    [WorkshopApi.reducerPath]: WorkshopApi.reducer,
    [PlacementApi.reducerPath]: PlacementApi.reducer,
    [CourseAPI.reducerPath]: CourseAPI.reducer,
    [CourseBookAPI.reducerPath]: CourseBookAPI.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // persist ke liye
    })
      .concat(adminAuthApi.middleware)
      .concat(sliderApi.middleware)
      .concat(TechnologyApi.middleware)
      .concat(PortfolioApi.middleware)
      .concat(EventApi.middleware)
      .concat(TeamMembersApi.middleware)
      .concat(WorkshopApi.middleware)
      .concat(PlacementApi.middleware)
      .concat(CourseAPI.middleware)
      .concat(CourseBookAPI.middleware)
      .concat(ContactApi.middleware)
});

export const persistor = persistStore(store);
