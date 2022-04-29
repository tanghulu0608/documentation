====================
Outstanding Accounts
====================

In Odoo, before being recorded in your bank account, payments are registered through transitory
accounts, named Outstanding Accounts.

- The :guilabel:`Outstanding Payments Account` is where outgoing payments are posted until they are
  linked to a withdrawal from your bank statement.
- The :guilabel:`Outstanding Receipts Account` is where incoming payments are posted until they are
  linked with a deposit from your bank statement.

These accounts should be of type :guilabel:`Current Assets`.

.. note::
   The movement from an Outstanding Account to a bank account is done automatically when you
   reconcile the bank account with a bank statement.

Configuration
=============

The Outstanding Accounts are defined by default. If necessary, you can update them by going to
:menuselection:`Configuration --> Settings --> Default Accounts` and define your Outstanding
Receipts and Payments Accounts.

You can also decide to use specific Outstanding Accounts related to a specific journal.

To do so, go to your :guilabel:`Dashboard`, click the menu selection ⋮ under :guilabel:`Bank` and
click on :guilabel:`Configuration`. In the :guilabel:`Incoming/Outgoing Payments` tab, click on the
dropdown column option to see and update your Outstanding Accounts.

.. image:: outstanding_accounts/outstanding_acc_column.png
   :align: center
   :alt: Select the dropdown column option and click on Outstanding Accounts

.. note::
   If you do not specify an Outstanding Payments Account or an Outstanding Receipts Account for a
   specific journal, Odoo will use the default Outstanding Accounts.
