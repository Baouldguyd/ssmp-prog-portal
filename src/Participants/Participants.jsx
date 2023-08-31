import { Table, Spin } from "antd";
import useGetParticipantInfo from "../Hooks/useGetParticipants";
import Popmodal from "../Pages/Popmodal";

const Participants = () => {
  const { participantsInfo, loading } = useGetParticipantInfo();

  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "First-Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last-Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "LGA",
      dataIndex: "lga",
      key: "lga",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 10,
      render: () => <Popmodal />,
    },
  ];
 
  console.log(participantsInfo);
  const data = participantsInfo?.map((participant, index) => {
    const date = new Date(participant.dob).getDay();
    return {
      key: participant.id,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
      lga: participant.lga,
      dob: new Date(participant.dob).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      programme: participant.programme,
    };
  });

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto ">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default Participants;
