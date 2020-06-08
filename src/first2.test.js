import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

const testData = {
  data: {
"quote":"Tweeting is legal and also therapeutic"
           },
};

describe('Snapshot test', () => {
  test('Matches the snapshot', () => {
  
    const AppInfo = create(<App AppData={testData.data.runs} isLoading={false} />);
    expect(AppInfo.toJSON()).toMatchSnapshot();
  });
});


