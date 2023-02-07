# Machine Test Task

- Design the Tools Documents page(refer the screenshots).
- Integrate The API
- The Page should have proper pagination

## Required Fields in the Env

1. REACT_APP_HOST_NAME = https://machine-test.cloudmlmdemo.com/

## Tasks

#### TASK - 1 Document CRUD

Follow the screenshots and build out the pages using the following api

<!-- - Get All: api/admin/tool-documents -->

  1. Parameters:
     - page - the required page number

- Add new document: /api/admin/tool-documents/

  1. Request Body
     - sort_order: int
     - title: string
     - document_url: file
     - \_method: PUT

- Get By Id: api/admin/tool-documents/<document_id>

- Update Document: api/admin/tool-documents/<document_id>

  1. Request Body
     - sort_order: int
     - title: string
     - document_url: file
     - \_method: PUT

<!-- - Delete: api/admin/tool-documents/<document_id> -->

#### TASK - 2 Settings Page

Follow the screenshots and build out the pages using the following api

- Get: api/admin/brand-company-details
- Update: api/admin/brand-company-details/<brand_id>

  1. Request Body

     - email: valid email
     - name: string
     - address: string
     - active: 1/0 (T/F)
     - favicon_img: url
     - logo_img: url
     - side_bar_logo_img: url
     - \_method: PUT

**The allotted time for the machine test is 2hr**
