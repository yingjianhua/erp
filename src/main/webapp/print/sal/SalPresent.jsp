<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.pub.svr.DbPool"%>
<%@page import="irille.pss.sal.SalPresent"%>
<%@page import="irille.pss.sal.SalPresentLine"%>
<%
try {
String mainFlds[] = {"org","code","cust","custName","status","amt","amtCost","apprBy","apprTime","createdBy","createdTime","shipingMode","operator","rem","org.com.name","org.com.addr","org.com.tel1","org.com.fax","shiping.addr","shiping.name","shiping.mobile","operator.tbObj.person.peMobile"};
String linesFlds[] = {"qty","uom","price","amt","goods.code","goods.name","goods.spec"};
SalPresent mainSalPresent=BeanBase.load(SalPresent.class,request.getParameter("pkey"));
List<SalPresentLine> listSalPresentLine = Idu.getLinesTid(mainSalPresent, SalPresentLine.class);
GenXmlData.GenParameterXmlData(response,mainSalPresent,listSalPresentLine,mainFlds,linesFlds);
} finally {
DbPool.getInstance().removeConn();
	}
%>
