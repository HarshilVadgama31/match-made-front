import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

function FriendCard({ name, image, status }) {
  return (
    <li className="h-22">
      <Card className="w-full flex-row h-20 items-center gap-2 shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 shrink-0 rounded-r-none"
        >
          <img
            src={`profile/${image}`}
            alt="card-image"
            className="w-20 object-cover object-center h-20"
          />
        </CardHeader>
        <CardBody className="w-full overflow-hidden truncate flex justify-between pl-1 pr-6">
          <Typography variant="h5" color="blue-gray" className="">
            {name}
          </Typography>
          {status == "Accepted" ? (
            <Chip variant="ghost" color="green" size="lg" value="Accepted" />
          ) : status == "Rejected" ? (
            <Chip variant="ghost" color="red" size="lg" value="Rejected" />
          ) : (
            <Chip variant="ghost" size="lg" value="Pending" />
          )}
        </CardBody>
      </Card>
    </li>
  );
}

export default FriendCard;
