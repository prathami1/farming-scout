import bearFactory from "@gooddata/sdk-backend-bear";
import { AnonymousAuthProvider } from "@gooddata/sdk-backend-base";

const backend = bearFactory({
  hostname: "http://127.0.0.1:5000/soil"
}).withAuthentication(new AnonymousAuthProvider());

export default backend;
