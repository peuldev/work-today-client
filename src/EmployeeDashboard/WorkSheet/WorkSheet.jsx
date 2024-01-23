import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import OurTitle from "../../components/OurTitle";
import { useForm } from "react-hook-form";
const WorkSheet = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = (data) => {
    axiosSecure
      .post("/work-sheet", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Work Today",
            text: "Work Time Add Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch((result) => {});
  };
  return (
    <div>
      <div>
        <OurTitle subHeading="Statistics" heading="Today Activity"></OurTitle>
      </div>
      <div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered"
              required
              {...register("location")}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hours</span>
              </label>
              <input
                type="number"
                placeholder="hours"
                className="input input-bordered"
                required
                {...register("hours")}
              />
            </div>
            <label className="form-control w-full mt-1">
              <div className="label">
                <span className="label-text-alt">Task</span>
              </div>
              <select
                {...register("task", { required: true })}
                className="select select-bordered"
                required
              >
                <option disabled value="defaul">
                  Selected Task
                </option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="content">Content</option>
                <option value="paperwork">Paper work</option>
                <option value="startrek">Star Trek</option>
              </select>
            </label>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              {/* TODU: use react date pikcer */}
              <input
                type="date"
                name=""
                id=""
                className="input input-bordered"
                {...register("date")}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-red">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkSheet;
