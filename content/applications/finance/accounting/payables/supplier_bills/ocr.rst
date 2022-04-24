=============================================================
Digitalize Documents with Optical Character Recognition (OCR)
=============================================================

Encoding Vendor Bills or Customer Invoices manually is a time-consuming task. With Optical
Character Recognition (OCR), digitalize and import these documents automatically into your database.

.. tip::
   `Try it out <https://www.odoo.com/app/invoice-automation>`_! Upload one of your bills or try one
   of our samples to see how it works.

.. seealso::
   Odoo Tutorials: OCR (link to the new video - not ready yet)
   
Configuration
=============

Digitalization is an In-App Purchase (IAP) service that requires prepaid credits to work. To buy
credits, go to Accounting ‣ Configuration ‣ Settings ‣ Digitization and click on *Buy credits*.
Or go to General Settings ‣ Contacts  ‣ Odoo IAP and click on *View My Services*.

.. note::
   If you are on Odoo Online (SAAS) and have the Enterprise version, you benefit from free trial
   credits to test the feature.

In the Accounting Settings ‣ Digitalization, choose whether the Vendor Bills and Customer Invoices
should be processed automatically (with OCR) or manually (on demand).

The *Single Invoice Line Per Tax* option can also be selected. It enables to get only one line
created per tax in the new bill, regardless of the number of lines from the invoice.

Digitalizing Vendor Bills
=========================

Your Vendor Bills can be uploaded from the Accounting Dashboard or by going to  Accounting ‣ Vendors
‣ Bills. Based on your configuration, it either processes the documents automatically, or you need
to click on *Send for Digitalization* to do it manually.

Digitalizing Customer Invoices
==============================

From the Accounting Dashboard, select the extra menu field (⋮) in the Customer Invoices journal, and
select Upload Invoices. Or go to Accounting ‣ Customers ‣ Invoices and select Upload.

.. note::
   - The more documents you scan, the better the system identifies the correct data.
   - If the document you upload contains several bills, the OCR detects them automatically and the
     Documents App can split them all.
   - You can also create and upload your documents from the Documents App.
   - Once the data is extracted from the PDF, you can correct it if necessary by clicking on the
     respective tag (available in Edit mode), and selecting the right information instead.
