import React, {FC} from "react";
import classes from "../styles/Test.module.scss";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

    return <FormControl disabled={disabled} className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={valueSelect}
            onChange={handleChange}
        >
            <MenuItem value="">
                <em>{title}</em>
            </MenuItem>
            {arr.map(el => {
                return <MenuItem key={el} value={el}>{el}</MenuItem>
            })}
        </Select>
    </FormControl>


}

export default SelectInArray