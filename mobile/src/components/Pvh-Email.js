import React, { Component } from 'react';
import PvhTextInput from "@Components/Pvh-Text-Input";

const PvhEmail = React.forwardRef((props, ref) => (
    <PvhTextInput {...props} ref={ref} />
));

export default PvhEmail;