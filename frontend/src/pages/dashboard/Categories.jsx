import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { MdOutlineModeEditOutline, MdDelete } from "react-icons/md";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../../app/actions/category/categoryAction";
import {
  clearError,
  clearMessage,
} from "../../app/features/category/categorySlice";
const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [deleteLoadingMap, setDeleteLoadingMap] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  // handlers
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
        dispatch(createCategory(categoryName));
        setCategoryName("");
        setFormLoading(false);
    }, 1000);
};

  const updateCategoryHandler = (categoryId, categoryName) => {
    console.log(categoryId, categoryName);
    setLoading(true);
    setTimeout(() => {
      dispatch(updateCategory(categoryName, categoryId));
      setCategoryName("");
      setLoading(false);
    }, 1000);
  };

  const deleteCategoryHandler = (categoryId) => {
    console.log(categoryId);
    setDeleteLoadingMap((prevLoadingMap) => ({
      ...prevLoadingMap,
      [categoryId]: true,
    }));
    setTimeout(() => {
      dispatch(deleteCategory(categoryId));
      setDeleteLoadingMap((prevLoadingMap) => ({
        ...prevLoadingMap,
        [categoryId]: false,
      }));
    }, 1000);
  };

  const { message, error, categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [loading, message, error, dispatch]);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Category Details</h2>
      <form onSubmit={onSubmitHandler} className="max-w-md mx-auto">
        <label className="block mb-2 ">
          <span className="mb-4">Category Name</span>
          <input
            type="text"
            name="productName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder=" Category Name"
            className="form-input mt-1 block w-full border p-2 rounded-full focus:outline-none placeholder:text-sm"
          />
        </label>
        <Button
          loading={formLoading}
          type="submit"
          className="bg-red shadow-none hover:shadow-none mt-4 rounded-full  "
        >
          Create new Category
        </Button>
      </form>
      <div className="categoriesList mt-6 overflow-y-auto transition-all duration-300 ease-linear flex  flex-col gap-3">

        <h1 className="font-semibold text-xl text-red">Exist Categories !</h1>
        {categories &&
          categories.map((item) => {
            return (
              <CategoryList
                name={item.categoryName}
                key={item._id}
                categoryId={item._id}
                updateCategoryHandler={updateCategoryHandler}
                loading={loading}
                deleteCategoryHandler={deleteCategoryHandler}
                deleteLoading={deleteLoadingMap[item._id]}
              />
            );
          })}
      </div>
    </div>
  );
};

function CategoryList({
  name,
  updateCategoryHandler,
  categoryId,
  loading,
  deleteCategoryHandler,
  deleteLoading,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    updateCategoryHandler(categoryId, categoryName);
  };

  // fun for string capitalization

  function capitalizeFirstLetter(str) {
    // Check if the input is a valid string
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="bg-[#fbfbfb] category-component flex justify-between p-1 border items-center rounded-md shadow-sm   ">
      <h1>{capitalizeFirstLetter(name)}</h1>
      <div className="category-button flex gap-3  ">
        <Button
          style={{ background: "green" }}
          onClick={showModal}
          loading={loading}
          type="submit"
          className="bg-red shadow-none hover:shadow-none rounded-full   "
        >
          <MdOutlineModeEditOutline className="text-xl hover:text-black cursor-pointer" />
        </Button>

        <Button
          onClick={() => deleteCategoryHandler(categoryId)}
          loading={deleteLoading}
          type="submit"
          className="bg-red  shadow-none hover:shadow-none rounded-full   "
        >
          <MdDelete className="text-xl hover:text-black cursor-pointer" />
        </Button>

        <Modal
          title="Update Category"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer = {null}
        >
          <form onSubmit={onsubmit} className="max-w-md mx-auto">
            <label className="block mb-3 mt-3 ">
              <input
                type="text"
                name="productName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder=" Category Name"
                className="form-input mt-1 block w-full rounded-full border p-2 focus:outline-none placeholder:text-sm"
              />
            </label>
            <Button
              loading={loading}
              type="submit"
              className="bg-red rounded-none shadow-none hover:shadow-none mt-4 rounded-full  "
            >
              Change Now
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Categories;
