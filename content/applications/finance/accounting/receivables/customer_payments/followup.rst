=====================
Follow-up on invoices
=====================

A follow-up message can be sent to customers when a payment is overdue. Odoo helps you identify late
payments and allows you to schedule and send the appropriate reminders. Your follow-ups can be sent
via different means such as email, post, or even SMS.

.. seealso::
   Odoo tutorials: Payment follow-up (LINK TO NEW VIDEO TO BE ADDED)

Follow-up Levels configuration
==============================

A follow-up plan with several actions is available by default in :menuselection:`Accounting -->
Configuration --> Follow-up Levels`, but you can customize it any way you want.

Depending on the number of overdue days you set in the *Follow-up Action* form, you can plan to
print a letter, send an email, an SMS message, or a letter to follow up with your customer. It is
also possible to automatically send a reminder by enabling the *Auto Execute* option.

.. tip::
   To send a reminder before the actual due date is reached, set a negative number of due days.

Follow-up Reports
=================

The overdue invoices you need to follow up on are available in :menuselection:`Accounting -->
Customers --> Follow-up Reports`. From there, you  can identify all the customers that have late
unpaid invoices.

When you open a customer, you see all their unpaid invoices (overdue or not). The due dates of the
late invoices appear in red. Select the invoices that are not late yet in the *Excluded* column to
exclude them from the reminder you send.

It is up to you to decide how to remind your customer. You can select *Print Letter*,
*Send By Email*, *Send By Post*, *Send By SMS*. Then, click on the *Done* button to view the next
follow-up that needs your attention.

.. note::
   * The contact information available on the invoice or on the contact form is used to send the
     reminder.
   * When the reminder is sent, it is documented in the chatter of the invoice.
   * If now is not the right time for a reminder, you can specify the Next Reminder Date and click
     on Remind me later. You will get the next report according to the Next Reminder Date set on the
     statement.

.. tip::
   Reconcile your bank statements right before launching your follow-up process to avoid sending a
   reminder to a customer that has already paid you.

Debtor's trust level
--------------------

To know whether a customer usually pays late or not, you can set a trust level by marking them as
good, normal, or bad debtor on the follow-up report. Just click on the bullet next to the customer's
name to do so.

.. image:: media/followup01.png
    :align: center

Send reminders in batches
-------------------------

To make your follow-up process even smoother, you can send reminder emails in batches from the
Follow-up Reports page. Select all the reports you would like to process, click on the *Action* gear
icon, and select *Process Follow-ups*.
