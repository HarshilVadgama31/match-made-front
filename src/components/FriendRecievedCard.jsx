import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Chip,
} from "@material-tailwind/react";

function FriendRecievedCard({ name, image, children, id }) {
  return (
    <li className="h-22" key={id}>
      <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 shrink-0 rounded-r-none"
        >
          <img
            src={`public/profile/${image}`}
            alt="card-image"
            className="w-20 object-cover object-center h-20"
          />
        </CardHeader>
        <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
          <Typography variant="h5" color="blue-gray" className="">
            {name}
          </Typography>
          <div className="flex gap-4">{children}</div>
        </CardBody>
      </Card>
    </li>
  );
}

export default FriendRecievedCard;
