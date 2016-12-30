<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.pub.svr.DbPool"%>
<%@page import="irille.gl.gs.GsOut"%>
<%@page import="irille.gl.gs.GsOutLineView"%>
<%@page import="irille.pub.inf.IOut"%>
<%@page import="irille.pub.bean.IGoods"%>
<%@page import="irille.action.gs.GsOutLineViewAction"%>
<%
try {
String mainFlds[] = {"code","origForm","origFormNum","warehouse","createdTime","rem","createdBy","apprBy","origForm","origForm.tb.name"};
String linesFlds[] = {"qty","uom","location","goods.code","goods.name","goods.spec"};
GsOut mainGsOut=BeanBase.load(GsOut.class,request.getParameter("pkey"));
String oirgName = mainGsOut.gtOrigForm().getClass().getName();
Class dc = Class.forName(oirgName + "DAO");
IOut OutLine = (IOut) dc.newInstance();
List<IGoods> view = OutLine.getOutLines(mainGsOut.gtOrigForm(), 0, 0);
List<GsOutLineView>  listGsOutLineView = GsOutLineViewAction.transIGoods2GsOutLineView(mainGsOut, view);
GenXmlData.GenParameterXmlData(response,mainGsOut,listGsOutLineView,mainFlds,linesFlds);
} finally {
DbPool.getInstance().removeConn();
	}
%>
