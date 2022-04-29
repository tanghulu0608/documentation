=========================================================
Invoice Time Spent on Tickets (Postpaid Support Services)
=========================================================

Connect a Helpdesk ticket to a Project task. While working on the ticket, use either the ticket or 
the task to record timesheets. When the ticket is solved, Odoo can pull from those timesheets to 
bill the client. This integration provides more control and transparency over what the client is 
charged for.

Configuration
=============

Go to :menuselection:`Helpdesk --> Configuration --> Helpdesk Teams`. Select a Helpdesk team and 
click :guilabel:`Edit`. Then, enable the options :guilabel:`Timesheet on Ticket` and 
:guilabel:`Time Reinvoicing`.

In the :guilabel:`Timesheet on Ticket` drop-down option, choose the Project to which tickets (and 
timesheets) will be linked by default. Open the Project's external link to edit its settings and 
enable the :guilabel:`Billable` option. Save both the Project and the Helpdesk team's settings to 
apply these features.

.. image:: reinvoice_time/project_billable.png
   :align: center
   :alt: Billable feature in Project settings

Create a sales order
====================

After a ticket comes into the pipeline, go to :menuselection:`Sales --> Create`. Add the customer
from the ticket to the new quotation. In the :guilabel:`Order Lines` tab, add the 
:guilabel:`Service on Timesheet` product. Click :guilabel:`Confirm` to turn the quotation into a 
sales order. 

.. tip::
   Remember the :abbr:`SO(Sales Order)` name for later to link the Helpdesk ticket to the correct 
   sales order.

.. image:: reinvoice_time/service_on_timesheet.png
   :align: center
   :alt: Add Service on Timesheet product to the SO

Record a timesheet
==================

Jump back to the Helpdesk ticket by going to the Helpdesk dashboard and clicking 
:guilabel:`Tickets` on the team's card. Another way to access the ticket is by going to the 
Projects dashboard and clicking :guilabel:`Tickets` on the project card. Click :guilabel:`Edit` 
and use the :guilabel:`Timesheets` tab to record the time spent on the ticket.

.. image:: reinvoice_time/record_timesheet_ticket.png
   :align: center
   :alt: Record time spent on a ticket

Link the Helpdesk ticket to the SO
==================================

While still on the ticket form, click :guilabel:`Edit` and then click the 
:guilabel:`Sales Order Item` field. Select the :abbr:`SO (Sales Order)` that was created earlier 
from the drop-down menu. Click :guilabel:`Save`.

.. image:: reinvoice_time/link_SO_ticket.png
   :align: center
   :alt: Link the SO item to the ticket

Create the invoice
==================

When the Helpdesk ticket is completed and the client is ready to be billed for time, begin by
clicking the :guilabel:`Sales Order` smart button on the ticket form to navigate to the sales 
order. The :guilabel:`Delivered` column should match the number of hours recorded on the ticket's 
timesheet. Click :guilabel:`Create Invoice` to bill the client for the time spent on the ticket.

.. seealso::
   - :doc:`invoice_time`
   - :doc:`/applications/inventory_and_mrp/inventory/management/products/uom`