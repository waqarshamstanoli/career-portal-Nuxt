import Vue from "vue";
import VueAxios from "vue-axios";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import moment from "moment";
import Clipboard from "v-clipboard";
import VueMeta from "vue-meta";

import axios from "./axios";
import Loader from "@/components/loader/loader";

Vue.use(VueAxios, axios);
Vue.use(Notifications, { velocity });
Vue.use(Clipboard);
Vue.use(VueMeta);

Vue.component("Loader", Loader);

Vue.filter("jobType", (type) => {
  let jobs = {
    0: "Part Time",
    1: "Full Time",
    2: "Hourly",
    3: "Weekly",
    4: "Remotely",
  };
  return jobs[type] ? jobs[type] : "";
});

Vue.filter("dateFilter", (value) => {
  let d = moment(value).format("MMMM Do YYYY");
  return d;
});

Vue.filter("limitChar", (value) => {
  if (value) {
    let data = value.substring(0, 15);
    return data + "...";
  }
  return "";
});
