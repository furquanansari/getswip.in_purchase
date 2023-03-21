const sequelize = require("sequelize");
const db = require("../config/db");
var vendor_details = db.define(
  "vendor_details",
  {
    vendor_id: { type: sequelize.INTEGER, primaryKey: true },
    name: { type: sequelize.STRING },
    dial_code: { type: sequelize.STRING },
    phone: { type: sequelize.INTEGER },
    email: { type: sequelize.STRING },
    cc_email:{ type: sequelize.STRING },
    gstin:{ type: sequelize.INTEGER },
    company_name:{ type: sequelize.STRING },
    address_line1:{ type: sequelize.STRING },
    address_line2:{ type: sequelize.STRING },
    city:{ type: sequelize.STRING },
    state:{ type: sequelize.STRING },
    pincode:{ type: sequelize.INTEGER },
    notes:{ type: sequelize.STRING },
    tags:{ type: sequelize.STRING },
    tds:{ type: sequelize.BOOLEAN },
    linked_customer:{ type: sequelize.INTEGER },
    opening_balance_type:{ type: sequelize.DOUBLE },
    opening_balance:{ type: sequelize.DOUBLE },
    balance:{ type: sequelize.DOUBLE },

  },
  {
    // freeze name table not using *s on name
    freezeTableName: true,
    // dont use createdAt/update
    timestamps: false,
  }
);
module.exports = vendor_details;
