const mutations = {
  mtnToken(sta, val) {
    sta.token = val;
  },
  mtnRouter(sta, val) {
    Object.assign(sta.staRouter, val);
  }
};

export default mutations;
