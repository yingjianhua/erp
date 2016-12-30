<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.pub.svr.DbPool"%>
<%@page import="irille.pss.pur.PurOrderDirect"%>
<%@page import="irille.pss.pur.PurOrderDirectLine"%>
<%
try {
String mainFlds[] = {"org","code","supplier","supname","status","amt","amtCost","revAddr","apprBy","apprTime","createdBy","createdTime","shipingMode","buyer","rem","org.code","org.com.name","org.com.addr","org.com.tel1","org.com.fax","shiping.addr","shiping.name","shiping.mobile","shiping.timeShipPlan","buyer.tbObj.person.ofTel","supplier_SysPersonLink.ofFax"};
String linesFlds[] = {"pkey","qty","uom","price","amt","goods.code","goods.name","goods.spec"};
PurOrderDirect mainPurOrderDirect=BeanBase.load(PurOrderDirect.class,request.getParameter("pkey"));
List<PurOrderDirectLine> listPurOrderDirectLine = Idu.getLinesTid(mainPurOrderDirect, PurOrderDirectLine.class);
GenXmlData.GenParameterXmlData(response,mainPurOrderDirect,listPurOrderDirectLine,mainFlds,linesFlds);
} finally {
DbPool.getInstance().removeConn();
	}
%>
