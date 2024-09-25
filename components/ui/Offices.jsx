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
                <Office name="VJC OVERSEAS (Hydrabad)" invert={invert}>
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
                    <span className="text-white-100 font-medium">CONTACT : +91 9160449000</span>
                </Office>
            </li>
            <li>
                <Office name="VJC OVERSEAS (Bangalore)" invert={invert}>
                    Raheja Arcade, 16 & 17,
                    <br />
                    ground floor,
                    <br />
                    5th Block,
                    <br />
                    Koramangala,
                    <br />
                    Bangalore,India
                    <br />
                    560095
                    <br /><span className="text-white-100 font-medium">CONTACT : +91 8970667999</span>

                </Office>
            </li>
            {/* <li>
                <Office name="Phone" invert={invert}>
                    +91 8970667999
                    <br />
                    <Office name="Email" invert={invert}>
                        vjcoverseas@gmail.com
                    </Office>
                </Office>
            </li> */}
        </ul>
    );
};

export default Offices;
