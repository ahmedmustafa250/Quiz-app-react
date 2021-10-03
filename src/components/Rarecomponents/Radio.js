import "./style.css";

export default function Radio() {
    return (
      <div>
        <span className="text">Gender</span>
        <input type="radio" className="gap" name="gender" value="male" />
        Male
        <input type="radio" className="gap" name="gender" value="female" />
        Female
        <input type="radio" className="gap" name="gender" value="other" />
        Other
      </div>
    );
  }
  