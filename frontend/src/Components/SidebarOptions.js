import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZbfg7nFeYsWSndXUc-mZAybchjPuaZ1pcltmIvgaBcCb5v_aTxkTY19MmkkTp3GBll4&usqp=CAU"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveitkExzGrnFbvGAP0Yuc1o24Ax83RRk4YSo5Fo7VwmnJK4CiJiqnGatfRRvbYyyszSc&usqp=CAU"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgF9f3RjJP8a7nLNLsgdyCcyEtk5vVI9c6A&usqp=CAU"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdIXoLtI_5yFVMn3VKgfr3WuLk7bMLsHvMg&usqp=CAU"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5MOwMxuu-7YUCDTTsULmVbzUipMUEa7yOQ&usqp=CAU"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYhVRi0-dDz-cqHZxU2-JDrSGjg2W_Thb2A&usqp=CAU"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLJng7eDaeYCTELWLSQwN62KdTFwYgSa1LA&usqp=CAU"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_btt72Sd4eOaUXWZz4-lhKX2nz5Uu8FkbWZ37lVEdC654sabYOEHAHXdvi8zrnxOHi9o&usqp=CAU"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9B_CaQQXOSA_L2JOhr-JDlJRxHdyQO4oIZM6lDGp_WScBvnObb_zNl3UKKNi8TjPl1s&usqp=CAU"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mDP74t3BkWYrODQQMNqwf3LAOv_fsjBwd04erK6p1AIVl9aO_Aiq8A83jgIE5aWCAb8&usqp=CAU"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;