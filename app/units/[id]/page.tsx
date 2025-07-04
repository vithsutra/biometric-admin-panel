import DataTable from "../_components/table";

export default function Units({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="w-[90%] mx-20 mt-10">
      <DataTable id={id} />
    </div>
  );
}
