<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.pub.svr.DbPool"%>
<%@page import="irille.pss.pur.PurRtn"%>
<%@page import="irille.pss.pur.PurRtnLine"%>
<%
try {
String mainFlds[] = {"org","code","supplier","supname","status","amt","amtCost","warehouse","apprBy","apprTime","createdBy","createdTime","rem","org.code","org.com.name","org.com.addr","org.com.tel1","org.com.fax","supplier_SysPersonLink.name","supplier_SysPersonLink.peMobile"};
String linesFlds[] = {"pkey","qty","uom","price","amt","goods.code","goods.name","goods.spec"};
PurRtn mainPurRtn=BeanBase.load(PurRtn.class,request.getParameter("pkey"));
List<PurRtnLine> listPurRtnLine = Idu.getLinesTid(mainPurRtn, PurRtnLine.class);
GenXmlData.GenParameterXmlData(response,mainPurRtn,listPurRtnLine,mainFlds,linesFlds);
} finally {
DbPool.getInstance().removeConn();
	}
%>
