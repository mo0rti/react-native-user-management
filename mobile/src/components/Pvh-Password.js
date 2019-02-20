import React from 'react';
import PvhTextInput from "@Components/Pvh-Text-Input";

const PvhPassword = React.forwardRef((props, ref) => (
    <PvhTextInput secureTextEntry={true} {...props} ref={ref} />
));

export default PvhPassword;