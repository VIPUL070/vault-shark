import { useNavigate } from "react-router-dom";

const Button = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="border-black border-2 py-1.5 px-3 btn">
      <button className="font-general uppercase italic font-bold cursor-pointer" onClick={() => navigate("/contact")}>{children}</button>
    </div>
  );
};

export default Button;
