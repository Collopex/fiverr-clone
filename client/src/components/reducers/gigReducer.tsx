/* eslint-disable @typescript-eslint/no-explicit-any */
export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem('currentUser') || 'false')?._id,
  title: '',
  category: '',
  coverImg: '',
  images: [],
  description: '',
  shortTitle: '',
  shortDescription: '',
  deliveryTime: 0,
  revisionNumber: 0,
  features: [],
  price: 0,
};

export const gigReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'ADD_IMAGES':
      return {
        ...state,
        coverImg: action.payload.coverImg,
        images: action.payload.images,
      };
    case 'ADD_FEATURE':
      return {
        ...state,
        features: [...state.features, action.payload],
      };
    case 'REMOVE_FEATURE':
      return {
        ...state,
        features: state.features.filter(
          (feature: [string]) => feature !== action.payload
        ),
      };

    default:
      return state;
  }
};
