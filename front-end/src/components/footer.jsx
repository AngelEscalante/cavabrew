export default function Footer({licencia}) {
    return (
        <div className="text-end">
          <label style={{ paddingRight: "20px" }}>Vencimiento:{licencia}</label>
        </div>
      );
}