import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Address" invert={invert}>
          No 119/5A
          <br />
          Green Path, Heerassagala
          <br />
          Kandy
        </Office>
      </li>
      <li>
        <Office name="Phone" invert={invert}>
          +94 (77) 684 7372
          <br />
          +94 (72) 984 7372
        </Office>
      </li>
    </ul>
  );
};

export default Offices;