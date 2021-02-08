const ERRORS = {
  general: 'Something went wrong, Please try again later.!',
  noSearchData: 'No Search Results',
};

export const errorHandler = (error: string) => {
  switch (error) {
    case 'NoData':
      return ERRORS.noSearchData;
    default:
      return ERRORS.general;
  }
};
