import clsx from "clsx";

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                "text-sm not-italic",
                invert ? "text-neutral-300" : "text-neutral-600"
            )}
        >
            <strong className={invert ? "text-white" : "text-neutral-100"}>
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
                <Office name="VJC OVERSEAS" invert={invert}>
                    Raheja Arcade, 16 & 17,
                    <br />
                    5th Block, Koramangala,
                    <br />
                    Bangalore,India
                    <br />
                    560095
                </Office>
            </li>
            <li>
                <Office name="Phone" invert={invert}>
                    +91 8970667999
                    <br />
                    <Office name="Email" invert={invert}>
                        vjcoverseas@gmail.com
                    </Office>
                </Office>
            </li>
        </ul>
    );
};

export default Offices;
