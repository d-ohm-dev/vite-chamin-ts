import { Box } from "@chakra-ui/react";
import {
  // Form,
  // Link,
  useLoaderData,
  // useSearchParams
} from "react-router-dom";
import { UserID } from "../../models/db";
// import Welcome from "./Welcome";

export default function UserDetail() {
  /**
   * @type {Record<string, import("../../models/db").UserID>}
   * @param {Data<JSON>}
   * @returns the render of the user
   */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: Record<string, any> = useLoaderData() as UserID;

  // Mas acerca de  "useSearchParams": https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
  // const [searchParams] = useSearchParams();

  return (
    <Box>
      Welcome {user.name}!
      <br />
      {/* <Welcome /> */}
      {}
    </Box>
  );
}
