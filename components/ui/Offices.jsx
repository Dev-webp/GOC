import clsx from "clsx";

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                "text-sm not-italic",
                invert ? "text-neutral-300" : "text-neutral-400"
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
                <Office name="VJC OVERSEAS (Hyderabad)" invert={invert}>
                    62/A,Ground Floor,
                    <br />
                    Sundari Reddy Bhavan, Fresh Mart, Vengalrao Nagar,
                    <br />
                    Sanjeeva Reddy Nagar,
                    <br />
                    Hyderabad, Telangana
                    <br />
                    500038
                    <br />
                    <span className="text-white-100 font-medium">
                        CONTACT: <a href="tel:+919160449000" className="text-white underline">+91 9160449000</a>
                    </span>
                </Office>
            </li>
            <li>
                <Office name="VJC OVERSEAS (Bangalore)" invert={invert}>
                    Raheja Arcade, 16 & 17,
                    <br />
                    Ground Floor,
                    <br />
                    5th Block,
                    <br />
                    Koramangala,
                    <br />
                    Bangalore,India
                    <br />
                    560095
                    <br />
                    <span className="text-white-100 font-medium">
                        CONTACT: <a href="tel:+918970667999" className="text-white underline">+91 8970667999</a>
                    </span>

                </Office>
            </li>
        </ul>
    );
};

export default Offices;
