module.exports = (code,text) => { return `<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Document</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style type="text/css">
   body {
      width: 100% !important;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      line-height: 100%;
   }

   img {
      outline: none;
      text-decoration: none;
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100% !important;
      margin: 0;
      padding: 0;
      display: block;
   }

   table td {
      border-collapse: collapse;
   }

   table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
   }

   .logo {
      padding-top: 7px;
      padding-bottom: 7px;
      font-size: 20px;
      color: rgb(230, 230, 230);
   }

   .main {
      margin-top: 80px;
      margin-bottom: 100px;
   }

   .container-title {
      border-bottom: 1px solid rgba(193, 193, 193, 0.8);
   }

   .main-title {
      font-size: 24px;
      line-height: 28px;
      color: #212121;

      font-weight: 500;
      padding-top: 20px;
      padding-bottom: 18px;
   }

   .mail-text {
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      font-weight: 400;
   }

   .code {
      padding-top: 20px;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 20px;
      border: 2px solid #9C9C9C;
      display: inline-block;

      font-weight: bold;
      font-size: 20px;
      line-height: 29px;
      text-align: center;
      letter-spacing: 0.08em;

      color: #324CD0;
   }

   .container-footer {
      border-top: 1px solid rgba(193, 193, 193, 0.8);
   }

   .footer-title {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      font-weight: 400;

      color: #000000;
   }

   .footer-text {
      font-size: 17px;
      line-height: 23px;

      color: #535353;
   }

   @media(max-width: 700px) {
      .table-700 {
         width: 500px !important;
      }

      .table-450 {
         width: 450px !important;
      }
   }

   @media(max-width: 500px) {
      .main-title {
         font-size: 18px;
         padding-top: 13px;
         padding-bottom: 11px;
      }

      .logo {
         font-size: 16px;
      }

      .footer-text {
         font-size: 15px;
      }

      .footer-title {
         font-size: 17px;
      }

      .code {
         padding-top: 10px;
         padding-left: 20px;
         padding-right: 20px;
         padding-bottom: 10px;

         font-size: 16px;
      }

      .mail-text {
         font-size: 15px;
         line-height: 20px;
      }

      .td-30 {
         height: 15px !important;
      }

      .td-20 {
         height: 10px !important;
      }

      .td-25 {
         height: 15px !important;
      }

      .table-700 {
         width: 400px !important;
      }

      .table-450 {
         width: 350px !important;
      }

      .td-10 {
         height: 0px !important;
      }
   }

   @media(max-width: 400px) {
      .table-700 {
         width: 320px !important;
      }

      .table-450 {
         width: 300px !important;
      }

      .mail-text {
         font-size: 12px;
         line-height: 16.7px;
      }

      .footer-text {
         font-size: 13px;
         line-height: 18px;
      }

   }
</style>
</head>

<body style="margin: 0; padding: 0;">
<table cellpadding="0" cellspacing="0" width="100%" height="100%" bgcolor="#E5E5E5">
   <tr>
      <td>
         <table class="main table-700" cellpadding="0" cellspacing="0" width="700px" align="center">
            <tr>
               <td>
                  <table class="header-td  table-700" bgcolor="#4F65DC" cellpadding="0" cellspacing="0" width="700px"
                     align="center">
                     <tr>
                        <td>
                           <table class="container-header table-450" bgcolor="#4F65DC" cellpadding="0"
                              cellspacing="0" width="640px" align="center">
                              <tr>
                                 <td style="font-family: Arial, Helvetica, sans-serif, 'Rubik';" class="logo">
                                    Express jwt
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>

                  <table class="container-title table-700" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0"
                     width="700px" align="center">
                     <tr>
                        <td>
                           <table class="table-450" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0" width="640px"
                              align="center">
                              <tr>
                                 <td class="main-title" style="font-family: Arial, Helvetica, sans-serif, 'Rubik';">
                                    Здравствуйте
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>

                  <table class="container-center table-700" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0"
                     width="700px" align="center">
                     <tr>
                        <td class="td-30" width="700" height="30px">
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <table class="table-450" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0" width="640px"
                              align="center">
                              <tr>
                                 <td style="font-family: Arial, Helvetica, sans-serif, 'Rubik';" class="mail-text"
                                    align="center">
                                    ${text}
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td class="td-25" width="700" height="25px">
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <table class="table-450" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0" width="640px"
                              align="center">
                              <tr class="table-450" width="640px" align="center">
                                 <td style="font-family: Arial, Helvetica, sans-serif, 'Montserrat';" class="code">
                                    ${code}
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td width="700" height="30px">
                        </td>
                     </tr>
                  </table>

                  <table class="container-footer table-700" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0"
                     width="700px" align="center">
                     <tr>
                        <td class="td-20" width="700" height="20px">
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <table class="table-450" bgcolor="#F6F6F6" cellpadding="0" cellspacing="0" width="640px"
                              align="center">
                              <tr>
                                 <td style="font-family: Arial, Helvetica, sans-serif, 'Rubik';" class="footer-title"
                                    align="center">
                                    Be safety
                                 </td>
                              </tr>
                              <tr>
                                 <td class="td-10" width="700" height="10px">
                                 </td>
                              </tr>
                              <tr>
                                 <td style="font-family: Arial, Helvetica, sans-serif, 'Rubik';" class="footer-text"
                                    align="center">
                                    В целях безопаности никому не сообщайте данный код, он является одноразовым, и
                                    срок его действия истекает через
                                    пару минут
                                 </td>
                              </tr>

                              <tr>
                                 <td class="td-20" width="700" height="20px">
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </td>
   </tr>
</table>
</body>
</html>`}