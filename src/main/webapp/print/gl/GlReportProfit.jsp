<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.gl.gl.GlReportProfit"%>
<%@page import="irille.gl.gl.GlReportProfitLine"%>
<%@page import="irille.pub.svr.DbPool"%>
<%
try {
	String mainFlds[] = {"org","beginDate","endDate","rem","createBy","createTime","rowVersion"};
	String linesFlds[] = {"keyName","keyValue","amtBegin","amtEnd"};
	GlReportProfit mainGlReportProfit=BeanBase.load(GlReportProfit.class,request.getParameter("pkey"));
	List<GlReportProfitLine> listGlReportProfitLine = Idu.getLinesTid(mainGlReportProfit, GlReportProfitLine.class);
	for(GlReportProfitLine line:listGlReportProfitLine) line.setKeyName(line.getKeyName().replaceAll("&nbsp&nbsp&nbsp", " "));//&nbsp会解析出错
	GenXmlData.GenParameterXmlData(response,mainGlReportProfit,listGlReportProfitLine,mainFlds,linesFlds);
} finally {
	DbPool.getInstance().removeConn();
}
%>
