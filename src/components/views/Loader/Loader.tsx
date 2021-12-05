import { Space, Spin } from 'antd';
import { memo } from 'react';
import { S } from '../../../Global.styles';

function LoaderViewComponent() {
  return (
    <S.WrapperLoader>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </S.WrapperLoader>
  );
}
export const LoaderView = memo(LoaderViewComponent);
