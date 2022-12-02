import React, {FC} from 'react';
import {View} from '@tarojs/components';
interface ITest {}

const Test: FC<ITest> = ({...props}) => {
    return (
        <View {...props}>Test</View>
    )
};
export default Test;