"use strict";
exports.__esModule = true;
var Taybl_1 = require("Taybl");
var object = {
    files: [
        {
            fileName: "file name1",
            invalid: [
                { type: "type name1", count: 6, "line numbers": "7, 18" },
                { type: "type name2", count: 2, "line numbers": "17, 9" }
            ]
        },
        {
            fileName: "file name2",
            invalid: [
                { type: "type name3", count: 0, "line numbers": "28" },
                { type: "type name4", count: 3, "line numbers": "1, 9, 12" }
            ]
        }
    ]
};
var taybl = new Taybl_1["default"](object);
taybl
    .withHorizontalLineStyle("-")
    .withVerticalLineStyle("|")
    .withNumberOfSpacesAtStartOfColumns(1)
    .withNumberOfSpacesAtEndOfColumns(1)
    .print();
