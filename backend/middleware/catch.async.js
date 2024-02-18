export const catchAsyncHandler = (controller) => (req, res, next) => {
  try {
    controller(req, res, next);
  } catch (error) {
   next()
  }
};
