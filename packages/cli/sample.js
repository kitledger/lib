var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../actions/dist/unit_model.js
var unit_model_exports = {};
__export(unit_model_exports, {
  create: () => create
});

// ../actions/dist/_internal.js
function __host_rpc(method, data) {
  return new Promise((resolve, reject) => {
    const id = crypto.randomUUID();
    const payload = { id, method, payload: data };
    const responseHandler = (event) => {
      if (event.data && event.data.type === "ACTION_RESPONSE" && event.data.payload.id === id) {
        self.removeEventListener("message", responseHandler);
        const { result, error } = event.data.payload;
        if (error) {
          reject(new Error(error));
        } else {
          resolve(result);
        }
      }
    };
    self.addEventListener("message", responseHandler);
    self.postMessage({ type: "ACTION_REQUEST", payload });
  });
}

// ../actions/dist/unit_model.js
async function create(data) {
  return await __host_rpc("UNIT_MODEL.CREATE", data);
}

// sample.ts
async function sample_default() {
  const model = await unit_model_exports.create({
    ref_id: "sample-model",
    alt_id: "sample-model-alt",
    name: "Sample Model",
    active: true
  });
  console.log("Sample Model:", model);
}
export {
  sample_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vYWN0aW9ucy9kaXN0L3VuaXRfbW9kZWwuanMiLCAiLi4vYWN0aW9ucy9kaXN0L19pbnRlcm5hbC5qcyIsICJzYW1wbGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IF9faG9zdF9ycGMgfSBmcm9tIFwiLi9faW50ZXJuYWwuanNcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiBhd2FpdCBfX2hvc3RfcnBjKFwiVU5JVF9NT0RFTC5DUkVBVEVcIiwgZGF0YSk7XG59XG47XG4iLCAiZXhwb3J0IGNvbnN0IF9fQVBJX01FVEhPRFMgPSBbXG4gICAgXCJVTklUX01PREVMLkNSRUFURVwiLFxuXTtcbi8vIC0tLSBJbnRlcm5hbCBSUEMgSW1wbGVtZW50YXRpb24gLS0tXG4vKipcbiAqIFRoZSBpbnRlcm5hbCwgdHlwZS1zYWZlIFJQQyBmdW5jdGlvbi5cbiAqIEBwYXJhbSBUUmVxdWVzdCBUaGUgdHlwZSBvZiB0aGUgZGF0YSBiZWluZyBzZW50LlxuICogQHBhcmFtIFRSZXNwb25zZSBUaGUgZXhwZWN0ZWQgdHlwZSBvZiB0aGUgZGF0YSBiZWluZyByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9faG9zdF9ycGMobWV0aG9kLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICBjb25zdCBwYXlsb2FkID0geyBpZCwgbWV0aG9kLCBwYXlsb2FkOiBkYXRhIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09IFwiQUNUSU9OX1JFU1BPTlNFXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnBheWxvYWQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZXNwb25zZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gZXZlbnQuZGF0YS5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlc3BvbnNlSGFuZGxlcik7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkFDVElPTl9SRVFVRVNUXCIsIHBheWxvYWQgfSk7XG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdW5pdE1vZGVsIH0gZnJvbSBcIkBraXRsZWRnZXIvYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbigpIHtcblxuICBjb25zdCBtb2RlbCA9IGF3YWl0IHVuaXRNb2RlbC5jcmVhdGUoe1xuXHRyZWZfaWQ6IFwic2FtcGxlLW1vZGVsXCIsXG5cdGFsdF9pZDogXCJzYW1wbGUtbW9kZWwtYWx0XCIsXG5cdG5hbWU6IFwiU2FtcGxlIE1vZGVsXCIsXG5cdGFjdGl2ZTogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJTYW1wbGUgTW9kZWw6XCIsIG1vZGVsKTtcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ1NPLFNBQVMsV0FBVyxRQUFRLE1BQU07QUFDckMsU0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDcEMsVUFBTSxLQUFLLE9BQU8sV0FBVztBQUM3QixVQUFNLFVBQVUsRUFBRSxJQUFJLFFBQVEsU0FBUyxLQUFLO0FBQzVDLFVBQU0sa0JBQWtCLENBQUMsVUFBVTtBQUMvQixVQUFJLE1BQU0sUUFDTixNQUFNLEtBQUssU0FBUyxxQkFDcEIsTUFBTSxLQUFLLFFBQVEsT0FBTyxJQUFJO0FBQzlCLGFBQUssb0JBQW9CLFdBQVcsZUFBZTtBQUNuRCxjQUFNLEVBQUUsUUFBUSxNQUFNLElBQUksTUFBTSxLQUFLO0FBQ3JDLFlBQUksT0FBTztBQUNQLGlCQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFBQSxRQUMzQixPQUNLO0FBQ0Qsa0JBQVEsTUFBTTtBQUFBLFFBQ2xCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFDQSxTQUFLLGlCQUFpQixXQUFXLGVBQWU7QUFDaEQsU0FBSyxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsUUFBUSxDQUFDO0FBQUEsRUFDeEQsQ0FBQztBQUNMOzs7QUQ3QkEsZUFBc0IsT0FBTyxNQUFNO0FBQy9CLFNBQU8sTUFBTSxXQUFXLHFCQUFxQixJQUFJO0FBQ3JEOzs7QUVEQSxlQUFPLGlCQUF5QjtBQUU5QixRQUFNLFFBQVEsTUFBTSxtQkFBVSxPQUFPO0FBQUEsSUFDdEMsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1AsQ0FBQztBQUVELFVBQVEsSUFBSSxpQkFBaUIsS0FBSztBQUNwQzsiLAogICJuYW1lcyI6IFtdCn0K
