import React from 'react';
import { ReactiveVar } from 'meteor/reactive-var';

import AddLink from './AddLink';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';
import PrivateHeader from './PrivateHeader';

const visible = new ReactiveVar(true);

export default (props) => {
  return (
    <div>
      <PrivateHeader title="Your app"/>
      <div className="page-content">
        <LinksListFilters visible={visible}/>
        <AddLink />
        <LinksList visible={visible}/>
      </div>
    </div>
  );
};
