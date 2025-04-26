import notebookIcon from "../assets/notebook-icon.png";

export default function Header() {
  return (
    <h1 className="text-2xl font-bold flex items-center gap-2">
      <img src={notebookIcon} alt="notebook-icon" className="w-9 h-7" />
      Note App
    </h1>
  );
}
