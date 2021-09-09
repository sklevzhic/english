import React, {FC} from "react";
import classes from "../styles/Test.module.scss";

interface SelectInArrayProps {
    title: string,
    arr: number[] | string[],
    disabled?: boolean
    valueSelect: number | string,
    setValueSelect: any
}

const SelectInArray: FC<SelectInArrayProps> = ({title, arr, disabled,valueSelect, setValueSelect}) => {

    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValueSelect(event.target.value as number);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return <>fd</>


}

export default SelectInArray