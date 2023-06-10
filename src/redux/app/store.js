import { configureStore } from '@reduxjs/toolkit';
import {} from '../features/userSlice'

 const store = configureStore({
  reducer: {
    todos:userreducer
  },
})

export default store;



// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;


// export const useAppDispatch = () => {
//   useDispatch<AppDispatch>
// }