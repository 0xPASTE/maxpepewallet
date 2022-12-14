import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header( props ) {
  return (

      <PageHeader
        title={(
          <a href="https://maxpepewallet.io" >
            {window.innerWidth<600?"🐸":"🐸  MaxWallet.io"}
          </a>
        )}
        subTitle=<a href="https://github.com/">
          {window.innerWidth<600?"":"info/code"}
        </a>
        style={{ cursor: "pointer",fontSize:32 }}
        extra={props.extra}
      />

  );
}
