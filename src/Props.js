import BasicProps from "../node_modules/prop-types";
export default (Review) => {
  Review.propTypes = {
    review: BasicProps.array,
  };
};
