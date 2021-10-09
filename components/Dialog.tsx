import React from 'react'
import {Modal} from "antd";

interface DialogProps {
    isModalVisible: boolean,
    handleOk: any,
    handleCancel: any
}

export const Dialog: React.FC<DialogProps> = ({isModalVisible, handleOk, handleCancel}) => {
    return         <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>;
};