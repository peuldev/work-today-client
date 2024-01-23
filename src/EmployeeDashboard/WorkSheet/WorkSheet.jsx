import { useState } from "react";
import OurTitle from "../../components/OurTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "autoprefixer";
const WorkSheet = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div>
      <div>
        <OurTitle subHeading="Statistics" heading="Today Activity"></OurTitle>
      </div>
      <div>
        <form className="card-body">
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
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="number"
              placeholder="location"
              className="input input-bordered"
              required
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
              />
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Selected Task</span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Sales</option>
                <option>Support</option>
                <option>Content</option>
                <option>Paper-work</option>
                <option>Star Trek</option>
              </select>
            </label>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(data) => setStartDate(data)}
                dateFormat="dd/MM/yyy"
                maxDate={new Date()}
                isClearable
                placeholderText="dd/mm/yyy"
                showYearDropdown
                scrollableMonthYearDropdown
                toggleCalendarOnIconClick
                className="input input-bordered w-full "
              ></DatePicker>
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
