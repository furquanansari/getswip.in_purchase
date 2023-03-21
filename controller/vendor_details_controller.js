const vendorDetailModel = require("../models/index");
const { Op } = require("sequelize");
const controller = {};

// get all data in vendor_details table

controller.getAll = async function (req, res) {
    try {
        const vendorData = await vendorDetailModel.vendor_details.findAll();
        if (vendorData.length > 0) {
             res
                .status(200)
                .json({ message: "Connection successful", data: vendorData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// Get all data of vendor_details by username

controller.getUsername = async function (req, res) {
    try {
        var vendorData = await vendorDetailModel.vendor_details.findAll({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
        });
        if (vendorData.length > 0) {
            res
            .status(200)
            .json({ message: "Connection successful", data: vendorData });
        } else {
        res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// create a new data in vendor_details table

controller.createNew = async function (req, res) {
    try {
        //   check data has already been created
        const checkData = await vendorDetailModel.vendor_details.findAll({
        where: {
            [Op.or]: {
                name: req.body.name
                },
            },
        });
    if (checkData.length > 0) {
        res.status(500).json({ message: "Vendor already exists..." });
    } else {
        await vendorDetailModel.vendor_details
            .create({
            name: req.body.name,
           
        })
        .then((result) => {
            res.status(201).json({
            message: "vendor successful created",data: {
            name: req.body.name,
            dial_code: req.body.dial_code,
            phone:req.body.phone,
            email: req.body.email,
            cc_email: req.body.cc_email,
            company_name: req.body.company_name,
            address_line1: req.body.address_line1,
            address_line2: req.body.address_line2,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            notes: req.body.notes,
            tags: req.body.tags,
            tds: req.body.tds,
            linked_customer: req.body.linked_customer,
            opening_balance_type: req.body.opening_balance_type,
            opening_balance: req.body.opening_balance,
            gstin: req.body.gstin,
            balance: req.body.balance
                
                },
            });
        });
    }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// update vendor_details

controller.editAt = async function (req, res) {
    try {
        await vendorDetailModel.vendor_details
            .findAll({ where: { vendor_id: req.body.vendor_id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await vendorDetailModel.vendor_details.update(
                       {
                           name: req.body.name,

                        },
                        { where: { vendor_id: req.body.vendor_id } }
                    );
                    res.status(200).json({
                        message: "update vendor_details successful",
                        data: {
                        vendor_id: req.body.vendor_id,
                        name: req.body.name,
                        dial_code: req.body.dial_code || '+91',
                        phone:req.body.phone || '',
                        email: req.body.email || '',
                        cc_email: req.body.cc_email || '',
                        company_name: req.body.company_name || '',
                        address_line1: req.body.address_line1 || '',
                        address_line2: req.body.address_line2 || '',
                        city: req.body.city || '',
                        state: req.body.state || '',
                        pincode: req.body.pincode || '',
                        notes: req.body.notes || '',
                        tags: req.body.tags || '',
                        tds: req.body.tds || '',
                        linked_customer: req.body.linked_customer || '',
                        opening_balance_type: req.body.opening_balance_type || '',
                        opening_balance: req.body.opening_balance || '',
                        gstin: req.body.gstin || '',
                        balance: req.body.balance || ''

                        },
                    });
                } else {
                    res.status(500).json({ message: "update vendor_details failed" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// delete vendor_details

controller.deleteUser = async function (req, res) {
    try {
        await vendorDetailModel.vendor_details
            .findAll({ where: { vendor_id: req.body.vendor_id } })
            .then(async (result) => {
        if (result.length > 0) {
            await vendorDetailModel.vendor_details.destroy({ where: { vendor_id: req.body.vendor_id } });
            res.status(200).json({ message: "delete vendor_details successfully" });
        } else {
            res.status(404).json({ message: "vendor_id vendor_details not found" });
            }
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = controller;