import { Route } from "react-router-dom";

import { CustomRoutes } from "react-admin";

import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

// https://fullcalendar.io/ 3️⃣
// https://ui.toast.com/tui-calendar 2️⃣
// https://github.com/namespace-ee/react-calendar-timeline 1️⃣

const groups = [
  { id: 1, title: "Корпус №1" },
  { id: 2, title: "Корпус №2" },
  { id: 3, title: "Корпус №3" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "Номер 1",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
  },
  {
    id: 1,
    group: 1,
    title: "Номер 1",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
  },
  {
    id: 2,
    group: 1,
    title: "Номер 2",
    start_time: moment().add(1, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 1,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

const CustomRoute = () => {
  return (
    <div>
      <h1>Hello custom route !</h1>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(1, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};

export const Routes = () => (
  <CustomRoutes>
    <Route path="/reservations" element={<CustomRoute />} />
    {/* <Route path="/faq" element={<FaqList />} /> */}
  </CustomRoutes>
);
