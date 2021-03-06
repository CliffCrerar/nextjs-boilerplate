// colorBlocks = arr => {
//      const colorBlocks = arr.map( ( sVar, i ) => {
//          // console.log( "sVar: ", sVar );
//          const thisStyleVar = sVar[ 0 ].replace( /-color/, "" );
//          const textMutate = [
//              "default-primary",
//              "dark-primary",
//              "primary-text",
//              "secondary-text"
//          ];
//          const classesColorDesc = textMutate.includes( thisStyleVar )
//              ? "text-light"
//              : "";
//          const classesColorCode = [
//              classesColorDesc,
//              "font-weight-bolder"
//          ].join( " " );
//          return (
//              <div
//                  key={"cb-" + i}
//                  className="color-grid-itm d-flex flex-column p-2"
//                  style={{background: `var(--${thisStyleVar})`}}
//              >
//                  <div className={classesColorDesc}>{thisStyleVar}</div>
//                  <div className={classesColorCode}>{sVar[ 1 ]}</div>
//              </div>
//          );
//      } );
//      return (
//          <React.Fragment>
//              <style jsx>{`
//                  .color-grid {
//                      display: grid;
//                      grid-template-rows: repeat(2, 150px);
//                      grid-template-columns: repeat(4, auto);
//                  }
//                  iframe[seamless]{
//                                  display:block;
//                              }
//              `}</style>
//              <div>
//                  <div className="card-panel">
//                      <h3 className="text-center mb-3">
//                          {this.themeName( this.props.currentTheme )}
//                      </h3>
//                      <div className="w-auto text-center color-grid border">
//                          {colorBlocks}
//                      </div>
//                      <h4 className="text-accent mt-3 mb-2 ">
//                          Style Classes
//                      </h4>
//                      <p>
//                          Implementing the colors is by class they may be used
//                          for text or backgrounds and this can be achieved by
//                          either prefixing{" "}
//                          <code className="bg-light-primary round-1">
//                              text-
//                          </code>{" "}
//                          ,or by prefixing{" "}
//                          <code className="bg-light-primary round-1">
//                              bg-
//                          </code>{" "}
//                          to the names in the color blocks seen above.
//                      </p>
//                      <p>Below please see the available options:</p>
//                      <div className="d-flex flex-row">
//                          <div className="w-50">
//                              <h5 className="text-secondary">
//                                  Text Color Classes
//                              </h5>
//                              <ul>
//                                  {( () => {
//                                      return arr.map( ( item, i ) => {
//                                          const className =
//                                              "text-" +
//                                              item[ 0 ].replace( "-color", "" );
//                                          return (
//                                              <li key={'text-class-' + i} className="p-1">
//                                                  <code className="bg-light-primary round-1 p-1">
//                                                      {className}
//                                                  </code>
//                                              </li>
//                                          );
//                                      } );
//                                  } )()}
//                              </ul>
//                          </div>
//                          <div className="w-50">
//                              <h5 className="text-secondary">
//                                  Background Color Classes
//                              </h5>
//                              <ul>
//                                  {( () => {
//                                      return arr.map( ( item, i ) => {
//                                          const className =
//                                              "bg-" +
//                                              item[ 0 ].replace( "-color", "" );
//                                          return (
//                                              <li key={'bg-class-' + i} className="p-1">
//                                                  <code className="bg-light-primary round-1 p-1">
//                                                      {className}
//                                                  </code>
//                                              </li>
//                                          );
//                                      } );
//                                  } )()}
//                              </ul>
//                          </div>
//                      </div>
//                      <h4 className="text-accent mt-3 mb-2 ">
//                          Theming
//                      </h4>
//                      <div>
//                          <p>Out of the box the application contains default themes:</p>
//                          <ul>
//                              {( () => {
//                                  // console.log( 'stylevars:', Object.keys( this.props.theme ) );
//                                  return (
//                                      <div>
//                                          {Object.keys( this.props.theme ).map( ( itm, i ) => {
//                                              // console.log( 'itm: ', itm );
//                                              return (
//                                                  <li key={'theme-name-' + i} className="p-1">
//                                                      <code className="bg-light-primary round-1 p-1">
//                                                          {itm}
//                                                      </code>
//                                                  </li>
//                                              )
//                                          } )}
//                                      </div>
//                                  )
//                              } )()}
//                          </ul>
//                      </div>
//                      <h5 className="text-secondary">Adding more themes</h5>
//                      <div>
//                          <p>New color schemes can be created by visiting <a href="https://www.materialpalette.com/" target="_blank">Material Palette</a>{" "}
//                              from there you can select a new color scheme and download it as a css file.
//                          </p>
//                          <p>Once the css file produces by <a href="https://www.materialpalette.com/" target="_blank">Material Palette</a>{" "} has been received copy it to
//                          {" "}<code className="bg-light-primary round-1 p-1">{'static/lib/theme/colors'}</code>
//                              next time the app is build it will install the new theme and it will appear as a selectable theme on the floating theme button.
//                          </p>
//                          {/* <iframe src="https://www.materialpalette.com/"></iframe> */}
//                      </div>
//                      <h4 className="text-accent mt-3 mb-2 ">
//                          Bootstrap Utilities
//                      </h4>
//                      <h4 className="text-accent mt-3 mb-2 ">
//                          Additional Helper Classes
//                      </h4>
//                  </div>
//              </div>
//          </React.Fragment>
//      );
//  };